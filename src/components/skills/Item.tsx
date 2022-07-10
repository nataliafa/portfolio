import { ElementType } from "react"
import { VStack, Center, Heading } from "@chakra-ui/react"

type Props = {
  name: string
  icon: ElementType
  fontSize: string
}

const Item = ({ name, icon, fontSize, ...props }: Props) => {
  const Icon = icon
  return (
    <VStack className="reveal-rotate-from-left" {...props}>
      <Center h="45px">
        <Icon fontSize={fontSize} color="#95A1BC" />
      </Center>
      <Heading as="h3" fontSize="xs" color="#95A1BC">
        {name}
      </Heading>
    </VStack>
  )
}

export default Item