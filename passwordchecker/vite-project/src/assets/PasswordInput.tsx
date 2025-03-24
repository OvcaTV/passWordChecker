import { useState } from 'react';

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

export default function PasswordInput({ password, setPassword }: PasswordInputProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="mb-3">
            <label className="form-label">Zadejte heslo:</label>
            <div className="input-group">
                <input
                    type={isVisible ? 'text' : 'password'}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? 'Skrýt' : 'Odkrýt'}
                </button>
            </div>
        </div>
    );
}
