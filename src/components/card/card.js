import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { BrandProducthunt } from 'tabler-icons-react';

const TourCard=(props)=> {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 400, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={props.photo} height={160} alt="India " />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{props.name}</Text>
          <Text weight={500}>{props.email}</Text>

        
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Name and email of all students
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Enter more details
        </Button>
      </Card>
    </div>
  );
}



export default TourCard;