import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const IngredientList = ({ combined }) => {
  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Ingredients List
      </Typography>
      <List>
        {combined.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${item.ingrediente}: ${item.medida}`}
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default IngredientList;
