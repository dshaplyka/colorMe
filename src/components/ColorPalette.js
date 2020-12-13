import React from 'react';

export default function ColorPalette(props) {

    const colors = ['#13478b', '#2468c3', '#6591cc', '#8cb9f4', '#b8d3f6', '#1da7f0', '#53acdc', '#71cbfb', '#32b6fc', '#cbb8f7', '#06c1c7','#4aeef3', '#23f8e3', '#8ff7ed', '#7bf8d5', '#90e691', '#d0f8b6', '#faf79c', '#fcfbd0', '#f9e9c3', '#ffc9a5', '#f8dbc7','#fdb29d', '#fba2b1','#fbc0ca', '#fd9ef8', '#eebbe1', '#f9d9f1','#fb9e9e', '#e98585'  ]

    return(
        <div className="color-palette">
            {colors.map(color => {
                const activeClass = props.currentColor === color ? "color-swatch-active" : "";
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
}
