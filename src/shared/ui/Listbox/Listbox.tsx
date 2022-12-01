import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './Listbox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListboxProps {
    items?: ListboxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readOnly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function Listbox(props: ListboxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readOnly,
        direction = 'bottom',
        label,
    } = props;
    const [selectedPerson, setSelectedPerson] = useState();

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}

            <HListBox
                disabled={readOnly}
                as="div"
                className={classNames(cls.Listbox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button disabled={readOnly} className={cls.trigger}>
                    <Button disabled={readOnly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
