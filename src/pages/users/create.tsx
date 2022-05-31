import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
    name: string
    email: string
    password: string
    password_Confirmation: string
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup
        .string()
        .required('Senha obrigatória')
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    password_Confirmation: yup
        .string()
        .oneOf([null, yup.ref('password')], 'Senhas não conferem'),
})

export default function CreateUser() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CreateUserFormData>({
        resolver: yupResolver(createUserFormSchema),
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
        values,
        event
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log(values)
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={['6', '8']}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={['6', '8']}
                            w="100%"
                        >
                            <Input
                                {...register('name')}
                                label="Nome completo"
                                error={errors.name}
                            />
                            <Input
                                type="email"
                                label="E-mail"
                                {...register('email')}
                                error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={['6', '8']}
                            w="100%"
                        >
                            <Input
                                type="password"
                                label="Senha"
                                {...register('password')}
                                error={errors.password}
                            />
                            <Input
                                type="password"
                                label="Confirmar senha"
                                {...register('password_Confirmation')}
                                error={errors.password_Confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="pink"
                                isLoading={isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
