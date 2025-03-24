

interface PasswordStrengthProps {
    password: string;
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
    const criteria = [
        { text: 'Minimálně 8 znaků', test: (pwd: string) => pwd.length >= 8 },
        { text: 'Alespoň jedno velké písmeno', test: (pwd: string) => /[A-Z]/.test(pwd) },
        { text: 'Alespoň jedno číslo', test: (pwd: string) => /\d/.test(pwd) },
        { text: 'Alespoň jeden speciální znak (!@#$%^&*)', test: (pwd: string) => /[!@#$%^&*]/.test(pwd) },
    ];

    const passedCriteria = criteria.filter((c) => c.test(password)).length;
    const strengthLevels = ['Slabé', 'Střední', 'Silné', 'Velmi silné'];
    const strength = strengthLevels[Math.min(passedCriteria, strengthLevels.length - 1)];

    return (
        <div>
            <p>Stav hesla: <strong>{strength}</strong></p>
            <div style={{ height: '10px', width: '100%', background: '#ddd' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${(passedCriteria / criteria.length) * 100}%`,
                        background: passedCriteria < 2 ? 'red' : passedCriteria < 3 ? 'orange' : 'green',
                        transition: 'width 0.3s',
                    }}
                />
            </div>
            <ul>
                {criteria.map((c, index) => (
                    <li key={index} style={{ color: c.test(password) ? 'green' : 'red' }}>
                        {c.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
