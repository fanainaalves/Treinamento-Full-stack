package com.carros.domain;

import com.carros.domain.dto.CarroDTO;
import com.carros.api.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarroService {
    @Autowired
    private CarroRepository rep;

    public List<CarroDTO> getCarros(){
        List<CarroDTO> list = rep.findAll().stream().map(CarroDTO::create).collect(Collectors.toList());
        return list;
    }

    public CarroDTO getCarroById(Long id){
        Optional<Carro> carro = rep.findById(id);
        return carro.map(CarroDTO::create).orElseThrow(()-> new ObjectNotFoundException("Carro não encontrado"));
    }

    public List<CarroDTO> getCarrosByTipo(String tipo){
        return rep.getByTipo(tipo).stream().map(CarroDTO::create).collect(Collectors.toList());
    }


    public CarroDTO insert(Carro carro) {
        Assert.isNull(carro.getId(), "Não foi possivel inserir o registro");
        return CarroDTO.create(rep.save(carro));
    }

    public CarroDTO update(Long id, Carro carro) {
        Optional<Carro> optional = rep.findById(id);
        if(optional.isPresent()){
            Carro db = optional.get();
            db.setNome(carro.getNome());
            db.setTipo(carro.getTipo());
            System.out.println("Carro id " + db.getId());

            rep.save(db);
            return CarroDTO.create(db);
        } else {
            return null;
            //throw new RuntimeException("Não foi possivel atualizar o registro");
        }
    }

    public void delete(Long id) {
        rep.deleteById(id);
    }
}
