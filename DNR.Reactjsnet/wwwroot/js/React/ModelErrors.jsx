
export const Errors = ({modelErrors, id}) => {
    return (
        modelErrors.map((err, i) =>
            <div key={i} >
                {
                    err.key == id ?
                        <span className="field-validation-error" data-valmsg-for={id} data-valmsg-replace="true">
                            {err.errors.map((message, i) => message.errorMessage)}
                        </span> :
                        null
                }
            </div>
        )
    );
}