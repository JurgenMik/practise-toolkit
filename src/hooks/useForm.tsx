import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Name is required'),
    email: yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email does not meet the requirements')
        .required('Email is required'),
});

type FormData = yup.InferType<typeof validationSchema>;

function Form() {
    const { register, handleChange, handleSubmit, formState: { errors } }: any = useForm<FormData>({
        mode: 'onTouched',
        resolver: yupResolver(validationSchema)
    });

    const onFormSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        {...register("name")}
                        onChange={handleChange}
                    />
                    {errors.name &&
                        <span>{errors?.name.message}</span>
                    }
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        {...register('email')}
                        onChange={handleChange}
                    />
                    {errors.email &&
                        <span>{errors?.email.message}</span>
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;