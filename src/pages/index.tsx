import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormInput {
    email: string
    password: string
}

type SignInFormData = {
    email: string
    password: string
}

const signInFormSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória'),
})

const SignIn: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({
        resolver: yupResolver(signInFormSchema),
    })

    const handleSignIn: SubmitHandler<SignInFormData> = async (
        values,
        event
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log(values)
    }

    return (
        <Flex w="100vw" h="100vh" align={'center'} justify={'center'}>
            <Flex
                as="form"
                w="100%"
                maxW={360}
                bg="gray.800"
                p={8}
                borderRadius={8}
                flexDir={'column'}
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing={4}>
                    <Input
                        type="email"
                        label="E-mail"
                        {...register('email')}
                        error={errors.email}
                    />
                    <Input
                        type="password"
                        label="Senha"
                        {...register('password')}
                        error={errors.password}
                    />
                </Stack>

                <Button
                    type="submit"
                    mt={6}
                    colorScheme="pink"
                    size={'lg'}
                    isLoading={isSubmitting}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}

export default SignIn
