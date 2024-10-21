const focusFirstErrorInput = (
    errors: { [key: string]: string | undefined }, 
    inputRefs: { [key: string]: React.RefObject<HTMLInputElement | HTMLSelectElement> }
) => {
    for (const key in errors) {
        if (errors[key] && inputRefs[key]) {
            inputRefs[key].current?.focus();
            break; 
        }
    }
};

export default focusFirstErrorInput;
