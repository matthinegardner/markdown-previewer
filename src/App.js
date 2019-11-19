import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
const marked = require("marked");

marked.setOptions({
    breaks: true
});

const placeholder = `
# Welcome to the Markdown Preview tool

## What is Markdown?
see [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

### Type markdown within the card on the left and the preview will appear on the right!

#### Use one asterisk to start creating a list:
* milk
* eggs
* bread

#### Use two asterisks to type in **bold** text.

#### Use a > sign to enter a blockquote:
> "Engineering is the closest thing to magic that exists in the world." - Elon Musk

#### Inline code \`<div></div>\` is shown within this line.

#### A code block is shown below:
\`\`\`
function myFunction(someParam) {
  if (someParam === 'this is cool') {
    return true;
  }
}
\`\`\`

![React Logo](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)
`;
class App extends Component {
    state = {
        markdown: placeholder
    };

    updateMarkdown = function(markdown) {
        this.setState({ markdown });
    };

    render() {
        const { markdown } = this.state;
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="App">
                    <header>
                        <h1>Markdown Preview</h1>
                        <h4>Built using React and Material UI</h4>
                    </header>

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item md={6} className="gridItem-wrapper">
                            <Card>
                                <TextField
                                    id="editor"
                                    multiline
                                    fullWidth
                                    defaultValue={markdown}
                                    onChange={e =>
                                        this.updateMarkdown(e.target.value)
                                    }
                                ></TextField>
                            </Card>
                        </Grid>
                        <Grid item md={6} className="gridItem-wrapper">
                            <Card>
                                <div
                                    id="preview"
                                    dangerouslySetInnerHTML={{
                                        __html: marked(markdown)
                                    }}
                                ></div>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
