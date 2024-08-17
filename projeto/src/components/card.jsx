import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import IngredientList from './ingredientList';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({id, title, image}) {
  const [expanded, setExpanded] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState(null)
  const [combinado, setCombinado] = useState(null)


  const arrangeIngredients = (mealsDetails) => {
	let entries = Object.entries(mealsDetails)
	if (entries) {
		let ingredientes = entries.reduce((acc, element) => {
			if (element[0].includes('strIngredient') && element[1])
				acc.push(element[1])
			return acc
		}, [])
	
		let measures = entries.reduce((acc, element) => {
			if (element[0].includes('strMeasure') && element[1])
				acc.push(element[1])
			return acc
		}, [])
		const combined = measures.map((medida, index) => ({
			ingrediente: ingredientes[index],
			medida
		  }));
		  
		  setCombinado(combined)
	}	
  }


const getRecipeById = async (id) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
	  return response.data.meals;
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };

  

  const handleExpandClick = async () => {
	if(!expanded) {
		let info = await getRecipeById(id);
		if (info) {
	
	  		setRecipeInfo(info[0]);
			arrangeIngredients(info[0])
		} else {
	  	console.error('Failed to fetch recipe info');
		}	
	}
	
	setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Some stuff"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
			POR ENQUANTO NADA AQUI!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {recipeInfo ? <Typography paragraph>
		    {`${recipeInfo.strInstructions}`}
          </Typography>: <Typography paragraph>Loading...</Typography>}
		  <IngredientList combined={combinado} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
