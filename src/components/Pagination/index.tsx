import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
	totalCountOfRegisters: number
	registersPerPage?: number
	currentPage?: number
	onChangePage: (page: number) => void
}

const siblingsCount = 4

generatePagesArray(2, 5)

function generatePagesArray(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => index + from + 1)
		.filter((page) => page > 0)
}

export function Pagination({
	totalCountOfRegisters,
	onChangePage,
	currentPage = 1,
	registersPerPage = 10,
}: PaginationProps) {
	const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

	const previousPage =
		currentPage > 1
			? generatePagesArray(
					currentPage - 1 - siblingsCount,
					currentPage - 1
			  )
			: []

	const nextPages =
		currentPage < lastPage
			? generatePagesArray(
					currentPage,
					Math.min(currentPage + siblingsCount, lastPage)
			  )
			: []

	return (
		<Stack
			direction={['column', 'row']}
			mt="8"
			justify="space-between"
			align="center"
			spacing="6"
		>
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>

			<HStack spacing="2">
				{currentPage > siblingsCount + 1 && (
					<>
						<PaginationItem number={1} />
						{currentPage > siblingsCount + 2 && (
							<Text color="gray.300" w="8" textAlign={'center'}>
								...
							</Text>
						)}
					</>
				)}

				{previousPage.length > 0 &&
					previousPage.map((page) => (
						<PaginationItem key={page} number={page} />
					))}

				<PaginationItem number={currentPage} isCurrent />

				{nextPages.length > 0 &&
					nextPages.map((page) => (
						<PaginationItem key={page} number={page} />
					))}

				{currentPage + siblingsCount < lastPage && (
					<>
						<PaginationItem number={lastPage} />
						{currentPage + 1 + siblingsCount < lastPage && (
							<Text color="gray.300" w="8" textAlign={'center'}>
								...
							</Text>
						)}
					</>
				)}
			</HStack>
		</Stack>
	)
}
