"use client";
import { Stage, Container, Sprite, Text } from "@pixi/react";

const MyComponent = () => {
  return (
    <Stage>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} />
      </Container>
    </Stage>
  );
};

export default MyComponent;
