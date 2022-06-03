import React from 'react';
import Slideshow from './slide';
import Box from '@mui/material/Box';
import { movies1, movies2 } from '../movieData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Grid from '@mui/material/Grid';

const HomePage = () => {
    // const movies = movies1;

    return <>
        <Slideshow />
        {/* making movie slides */}
        <Box sx={{ width: '100%', margin: '1rem' }}>
            <Typography variant="h5" component="h2" style={{ marginLeft: "2rem" }}>
                Latest & Trending
            </Typography>
            {/* movie */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}>
                {
                    movies1.map((movie, index) => {
                        return <Card key={index} sx={{ maxWidth: 250, margin: "2rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    image={movie.cardImg}
                                    title={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movie.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    })
                }
            </div>
        </Box>

        <Box sx={{ width: '100%', margin: '1rem' }}>
            <Typography variant="h5" component="h2" style={{ marginLeft: "2rem" }}>
                Best in Sports
            </Typography>
            {/* movie */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}>
                {
                    movies2.map((movie, index) => {
                        return <Card key={index} sx={{ maxWidth: 250, margin: "2rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    image={movie.cardImg}
                                    title={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movie.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    })
                }
            </div>
        </Box>

        <Box sx={{ width: '100%', margin: '1rem' }}>
            <Typography variant="h5" component="h2" style={{ marginLeft: "2rem" }}>
                Movies Recommended For You
            </Typography>
            {/* movie */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}>
                {
                    movies1.map((movie, index) => {
                        return <Card key={index} sx={{ maxWidth: 250, margin: "2rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    image={movie.cardImg}
                                    title={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movie.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    })
                }
            </div>
        </Box>
        <Box sx={{ width: '100%', margin: '1rem' }}>
            <Typography variant="h5" component="h2" style={{ marginLeft: "2rem" }}>
                Hotstar Specials - First Episode Free
            </Typography>
            {/* movie */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}>
                {
                    movies1.map((movie, index) => {
                        return <Card key={index} sx={{ maxWidth: 250, margin: "2rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    image={movie.cardImg}
                                    title={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movie.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    })
                }
            </div>
        </Box>
    </>
}

export default HomePage