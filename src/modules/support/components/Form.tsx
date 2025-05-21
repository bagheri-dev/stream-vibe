"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/shared/Button";
import {toast} from "react-toastify";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    termsAgreement: boolean;
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
        toast.success("Form submitted successfully!")
        reset();
    };

    return (
        <div className="bg-black06 p-4 sm:p-6 md:p-8 lg:p-[50px] rounded-xl w-full max-w-4xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[50px]">
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-[50px]">
                        <div className="space-y-2 sm:space-y-4 flex-1">
                            <label htmlFor="firstName" className="text-white font-manrope-semibold text-sm sm:text-base md:text-lg block">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                {...register("firstName", { required: "First name is required" })}
                                type="text"
                                className={`grey60 w-full p-3 sm:p-4 text-sm sm:text-base md:text-lg bg-black06 rounded-lg md:rounded-xl border ${
                                    errors.firstName ? "border-red-500" : "border-[#262626]"
                                } placeholder-grey60`}
                                placeholder="Enter First Name"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName.message}</p>
                            )}
                        </div>
                        <div className="space-y-2 sm:space-y-4 flex-1">
                            <label htmlFor="lastName" className="text-white font-manrope-semibold text-sm sm:text-base md:text-lg block">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                {...register("lastName", { required: "Last name is required" })}
                                type="text"
                                className={`grey60 w-full p-3 sm:p-4 text-sm sm:text-base md:text-lg bg-black06 rounded-lg md:rounded-xl border ${
                                    errors.lastName ? "border-red-500" : "border-[#262626]"
                                } placeholder-grey60`}
                                placeholder="Enter Last Name"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-[50px]">
                        <div className="space-y-2 sm:space-y-4 flex-1">
                            <label htmlFor="email" className="text-white font-manrope-semibold text-sm sm:text-base md:text-lg block">
                                Email
                            </label>
                            <input
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                type="email"
                                className={`grey60 w-full p-3 sm:p-4 text-sm sm:text-base md:text-lg bg-black06 rounded-lg md:rounded-xl border ${
                                    errors.email ? "border-red-500" : "border-[#262626]"
                                } placeholder-grey60`}
                                placeholder="Enter Email Address"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2 sm:space-y-4 flex-1">
                            <label htmlFor="phone" className="text-white font-manrope-semibold text-sm sm:text-base md:text-lg block">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                {...register("phone", {
                                    pattern: {
                                        value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                                        message: "Invalid phone number",
                                    },
                                })}
                                type="tel"
                                className={`grey60 w-full p-3 sm:p-4 text-sm sm:text-base md:text-lg bg-black06 rounded-lg md:rounded-xl border ${
                                    errors.phone ? "border-red-500" : "border-[#262626]"
                                } placeholder-grey60`}
                                placeholder="Enter Phone Number"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                        <label htmlFor="message" className="text-white font-manrope-semibold text-sm sm:text-base md:text-lg block">
                            Message
                        </label>
                        <textarea
                            id="message"
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                            rows={4}
                            className={`grey60 w-full p-3 sm:p-4 text-sm sm:text-base md:text-lg bg-black06 rounded-lg md:rounded-xl border ${
                                errors.message ? "border-red-500" : "border-[#262626]"
                            } placeholder-grey60`}
                            placeholder="Enter Message"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center w-full sm:w-auto">
                            <input
                                id="termsAgreement"
                                {...register("termsAgreement", {
                                    required: "You must accept the terms",
                                })}
                                type="checkbox"
                                className={`mr-2 h-4 w-4 sm:h-5 sm:w-5 rounded border ${
                                    errors.termsAgreement ? "border-red-500" : "border-[#262626]"
                                } bg-black06 text-primary focus:ring-primary`}
                            />
                            <label htmlFor="termsAgreement" className="grey60 text-sm sm:text-base">
                                I agree with Terms of Use and Privacy Policy
                            </label>
                        </div>
                        {errors.termsAgreement && (
                            <p className="text-red-500 text-xs sm:text-sm md:hidden">{errors.termsAgreement.message}</p>
                        )}
                        <Button
                            type="submit"
                            text="Send Message"
                        />
                    </div>
                    {errors.termsAgreement && (
                        <p className="text-red-500 text-xs sm:text-sm hidden md:block">{errors.termsAgreement.message}</p>
                    )}
                </div>
            </form>
        </div>
    );
};