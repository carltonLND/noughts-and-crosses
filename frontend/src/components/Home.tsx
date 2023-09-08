import { Divider, SimpleGrid } from "@chakra-ui/react"
import LocalGameNav from "./LocalGameNav"
import RemoteGameNav from "./RemoteGameNav"

function Home() {
  return (
    <SimpleGrid
      columns={3}
      templateColumns="1fr 1em 1fr"
      height="100vh"
      placeItems="center"
    >
      <LocalGameNav />
      <Divider height="50%" orientation="vertical" />
      <RemoteGameNav />
    </SimpleGrid>
  )
}

export default Home