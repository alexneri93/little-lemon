function FormField({type, id, label, onChange, min, max, showError, value, errorMsg, children}){
    let input;
    if(type === "select"){
        input = <select id={id} value={value} required aria-required="true" onChange={onChange} className="mb-2 form__field">
            {children}
        </select>
    } else {
        input = <input type={type} id={id} min={min} max={max} value={value} required aria-required="true" onChange={onChange} className="mb-2 form__field"/>
    }

    return(
        <div className="d-flex flex-column-reverse p-relative mb-3">
            {showError && <div className="text-red">{errorMsg}</div>}
            {input}
            <label htmlFor={id} className="mb-2">{label}</label>
        </div>
    )
}

export default FormField;