import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { RiAddLine, RiEdit2Line } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function Users() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight={'normal'}>
                            Usuários
                        </Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="small"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table>
                        <Thead>
                            <Tr px="6" color="gray.300" width="8">
                                <Th>
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>KageNo</Text>
                                        <Text fontSize="sm" color="gray.300">
                                            micaraujo71@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>30 de maio de 2022</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="small"
                                        colorScheme="purple"
                                        leftIcon={
                                            <Icon
                                                as={RiEdit2Line}
                                                fontSize="16"
                                            />
                                        }
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}
