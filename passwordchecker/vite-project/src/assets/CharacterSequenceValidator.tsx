
interface CharacterSequenceValidatorProps {
    password: string;
}

export default function CharacterSequenceValidator({ password }: CharacterSequenceValidatorProps) {
    // Regulární výraz hledající sekvenci: malé písmeno, velké písmeno, číslo, speciální znak
    const sequenceRegex = /[a-z][A-Z][0-9][!@#$%^&*]/;
    const isValid = sequenceRegex.test(password);

    return (
        <div style={{ color: isValid ? 'green' : 'red' }}>
            {isValid ? 'Heslo obsahuje sekvenci znaků.' : 'Chybí sekvence znaků (např. aA1!).'}
        </div>
    );
}
