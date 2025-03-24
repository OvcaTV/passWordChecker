import { useEffect, useState } from 'react';

interface CountryFlagValidatorProps {
    password: string;
}

export default function CountryFlagValidator({ password }: CountryFlagValidatorProps) {
    // Seznam zkratek států
    const countries = [
        "AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ",
        "BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS",
        "BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN",
        "CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE",
        "EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF",
        "GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM",
        "HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM",
        "JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC",
        "LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK",
        "ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA",
        "NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG",
        "PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW",
        "SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS",
        "ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO",
        "TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI",
        "VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"
    ];

    // Náhodný výběr zkratky státu
    const [selectedCountry, setSelectedCountry] = useState('');
    const [flagUrl, setFlagUrl] = useState('');

    useEffect(() => {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        setSelectedCountry(randomCountry);
        setFlagUrl(`https://flagsapi.com/${randomCountry}/flat/64.png`);
    }, []);

    // Validace hesla (obsahuje zkratku státu?)
    const isValid = password.toUpperCase().includes(selectedCountry);

    return (
        <div className="alert alert-light mt-3">
            <p>
                Heslo musí obsahovat kód státu na vlajce:
            </p>
            {flagUrl && <img src={flagUrl} alt="Vlajka" className="border rounded" />}
            <p className={isValid ? "text-success" : "text-danger"}>
                {isValid ? "Správně zadaná zkratka vlajky země :-)" : "Špadně zadaná zkratka vlajky země :-("}
            </p>
        </div>
    );
}
