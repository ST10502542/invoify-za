"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Currencies
import currenciesDetails from "@/public/assets/data/currencies.json";

// Styles
import { fieldControl, fieldLabel, fieldRow } from "./fieldStyles";

// Types
import { NameType } from "@/types";

// Bundled so that visitors' browsers make no third-party request.
const CURRENCIES = Object.entries(currenciesDetails).map(
    ([code, { currency }]) => ({ code, name: currency })
);

type CurrencySelectorProps = {
    name: NameType;
    label?: string;
    placeholder?: string;
};

const CurrencySelector = ({
    name,
    label,
    placeholder,
}: CurrencySelectorProps) => {
    const { control } = useFormContext();

    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <div className={fieldRow}>
                            <FormLabel className={fieldLabel}>
                                {label}:
                            </FormLabel>
                            <div className={fieldControl}>
                                <Select
                                    {...field}
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue
                                                placeholder={placeholder}
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent
                                        style={{
                                            overflowY: "hidden",
                                            height: "200px",
                                        }}
                                    >
                                        <SelectGroup>
                                            <SelectLabel>
                                                Currencies
                                            </SelectLabel>

                                            {CURRENCIES.map((currency) => (
                                                <SelectItem
                                                    key={currency.code}
                                                    value={currency.code}
                                                >
                                                    {currency.name}{" "}
                                                    {`(${currency.code})`}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                )}
            />
        </div>
    );
};

export default CurrencySelector;
