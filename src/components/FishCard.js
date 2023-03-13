import axios from "axios";

import { useState, useEffect } from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function FishCard() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [typedInput, setTypedInput] = useState("");
  const [axiosInput, setAxiosInput] = useState("");

  const [fishResults, setfishResults] = useState([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const get = () => {
    const options = {
      method: "GET",
      url: `https://fish-species.p.rapidapi.com/fish_api/fish/${search}`,
      headers: {
        "X-RapidAPI-Key": "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
        "X-RapidAPI-Host": "fish-species.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response);
        setfishResults(response.data);
        console.log("debounce", response.data);
      })
      .catch(function (error) {
        console.error(" ERROR", error);
      });
  };

  useEffect(() => {
    console.log(fishResults);
  }, [fishResults]);
  function handleChange(e) {
    setSearch(e.target.value.split(" ").join("%20"));

    setTypedInput(e.target.value);
  }
  useEffect(() => get(), [search]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <input type="text" value={typedInput} onChange={handleChange} />
      </div>
      <Card
        sx={{
          height: "auto",
          width: 300,
          backgroundColor: "rgba(13, 14, 18, 0.60)",
        }}
      >
        {fishResults.length > 0 && (
          <>
            <CardHeader
              title="Fish"
              subheader={fishResults[0]?.name || "sub"}
            />
            <CardMedia
              component="img"
              height="194"
              image={fishResults[0].img_src_set["2x"]}
              alt="fish"
              sx={{
                width: "299px",
                height: "200px",
              }}
            />
          </>
        )}
        <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <div>hello</div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default FishCard;
