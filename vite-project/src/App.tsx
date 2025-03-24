import { useState, useEffect } from 'react';
import PasswordInput from './assets/PasswordInput';
import PasswordStrength from './assets/PasswordStrength';
import CharacterSequenceValidator from './assets/CharacterSequenceValidator';
import PasswordTimeValidator from './assets/PasswordTimeValidator';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryValidator from './assets/CountryValidator';

export default function App() {
    const [password, setPassword] = useState('');
    const [passwordStartTime, setPasswordStartTime] = useState(Date.now());

    const handlePasswordChange = (newPassword) => {
        if (password.length === 0) {
            setPasswordStartTime(Date.now()); // Resetuje čas při prvním zadání
        }
        setPassword(newPassword);
    };

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10); // 10 sekund pro test; reálně 120000 ms (2 minuty)

        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <div className="container" style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <h2>Kontrola síly hesla</h2>
            <PasswordInput password={password} setPassword={handlePasswordChange} />
            <PasswordStrength password={password} />
            <CharacterSequenceValidator password={password} />
            <PasswordTimeValidator password={password} passwordStartTime={passwordStartTime} />
            <CountryValidator password={password} />
        </div>
    );
}
