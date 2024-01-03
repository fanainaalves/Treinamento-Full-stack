import { forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponent = forwardRef((props, ref) => {
    const localIputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            validate: () => {
                if (localInputRef.current.value.length > 3) {
                    localIputRef.current.value = "";
                }
            },
        };
    });

    return (
        <div>
            <p>Insira máximo 3 caracteres!</p>
            <input type="text" ref={localIputRef} />
        </div>
    );
});

export default SomeComponent;