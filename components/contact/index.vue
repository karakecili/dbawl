<template>
    <div class="w-full bg-gray-300 flex justify-center"><a id="contact" href="#" class="anchor"></a>
        <div
            class="w-full lg:max-w-[1133px] xl:max-w-[1440px] py-[32px] px-[29px] pb-[66px] lg:pb-[100px] lg:px-[157px] lg:py-[50px] xl:px-[310px] flex flex-col">
            <div class="w-full text-center">
                <h1 class="font-bold text-[32px] lg:text-[56px]">
                    {{ $t('homeContact.title') }}
                </h1>
            </div>
            <form class="w-full flex flex-col gap-[20px] mt-[28px]" @submit.prevent="submitPressed">
                <div class="flex flex-col lg:flex-row gap-[20px]">
                    <div class="w-full flex flex-col">
                        <label for="email" class="text-[14px]">{{ $t('contact.workEmail') }}</label>
                        <input id="email" name="email" maxlength="100" required="required"
                            class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
                            v-model="input.email" @keyup="validateEmailField('email', input.email)"
                            @blur="validateEmailField('email', input.email)">
                        <div class="text-red-900 text-xs" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                    </div>
                    <div class="w-full flex flex-col ">
                        <label for="companyName" class="text-[14px]">{{ $t('contact.companyName') }}</label>
                        <input id="companyName" name="companyName" maxlength="100" required="required"
                            class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
                            v-model="input.companyName" @keyup="validateCompanyNameField('companyName', input.companyName)"
                            @blur="validateCompanyNameField('companyName', input.companyName)">
                        <div class="text-red-900 text-xs" v-if="errors.companyName">
                            {{ errors.companyName }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-[20px]">
                    <div class="w-full flex flex-col">
                        <label for="name" class="text-[14px]">{{ $t('contact.firstName') }}</label>
                        <input id="name" name="name" maxlength="100" required="required"
                            class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
                            v-model="input.firstName" @keyup="validateFirstNameField('firstName', input.firstName)"
                            @blur="validateFirstNameField('firstName', input.firstName)">
                        <div class="text-red-900 text-xs" v-if="errors.firstName">
                            {{ errors.firstName }}
                        </div>
                    </div>
                    <div class="w-full flex flex-col">
                        <label for="surname" class="text-[14px]">{{ $t('contact.lastName') }}</label>
                        <input id="surname" name="surname" maxlength="100" required="required"
                            class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
                            v-model="input.lastName" @keyup="validateLastNameField('lastName', input.lastName)"
                            @blur="validateLastNameField('lastName', input.lastName)">
                        <div class="text-red-900 text-xs" v-if="errors.lastName">
                            {{ errors.lastName }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-[20px]">
                    <div class="w-full flex flex-col">
                        <label for="phoneNumber" class="text-[14px]">{{ $t('contact.phone') }}</label>
                        <input id="phoneNumber" name="phoneNumber" maxlength="100" required="required"
                            class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]"
                            v-model="input.phone" @keyup="validatePhoneField('phone', input.phone)"
                            @blur="validatePhoneField('phone', input.phone)">
                        <div class="text-red-900 text-xs" v-if="errors.phone">
                            {{ errors.phone }}
                        </div>
                    </div>
                    <div class="w-full flex flex-col">
                        <label for="message" class="text-[14px]">{{ $t('contact.additionalInfo') }}</label>
                        <input id="message" name="message" maxlength="1000" required="required"
                            class="h-[40px] mt-[10px] border border-surface-variant rounded-[6px] px-[10px]" type="text"
                            v-model="input.message" @keyup="validateMessageField('message', input.message)"
                            @blur="validateMessageField('message', input.message)">
                        <div class="text-red-900 text-xs" v-if="errors.message">
                            {{ errors.message }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-[20px] text-center px-[20px]">
                    <p class="text-[14px]">{{ $t('contact.formAgree1') }}
                        <a href="/#privacy" target="_blank" class="text-blue-700">{{ $t('contact.formAgree2') }}</a>
                    </p>
                </div>
                <div class="flex flex-col gap-[20px] text-center">
                    <button type="submit" class="text-white bg-blue-700 py-[12px] rounded-[4px] text-[15px] cursor-pointer"
                        :class="isSubmitDisabled && 'bg-blue-500 cursor-not-allowed'" :disabled="isSubmitDisabled">
                        <span>{{ $t('contact.submit') }}</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useValidation } from '../../composables/useValidation';
import { useContacts } from '../../stores/contact'
const { t } = useI18n()

const {
    errors,
    validateEmailField,
    validateCompanyNameField,
    validateFirstNameField,
    validateLastNameField,
    validatePhoneField,
    validateMessageField,
} = useValidation();
const input = reactive({
    email: '',
    companyName: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
});

const isSubmitDisabled = computed(() => {
    let disabled = true;
    for (let field in input) {
        if (!input[field] || errors[field]) {
            disabled = true;
            break;
        }
        disabled = false;
    }
    return disabled;
});

const store = useContacts()

const submitPressed = async () => {
    const res = await store.sendForm(input)

    if (!res.isError) {
        alert(t('contact.messageSent'))
        window.location.reload()
    } else {
        alert(t('contact.messageFail'))
    }
};
</script>

<style lang="scss" scoped></style>