import React, { useState } from "react";

export function useInput(initialValue: number | string) {
    const [value, setValue] = useState<number | string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange,
    };
}