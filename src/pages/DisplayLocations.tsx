import { useQuery, gql } from '@apollo/client';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

interface LocationsData {
  locations: {
    id: string;
    name: string;
    description: string;
    photo: string;
  }[];
}

export default function DisplayLocations() {
  const { loading, error, data } = useQuery<LocationsData>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data &&
        data.locations.map(({ id, name, description, photo }) => (
          <Card key={id} sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={photo}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </>
  );
}
