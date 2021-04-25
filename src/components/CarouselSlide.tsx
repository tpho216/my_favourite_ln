
import * as React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
`;

const SlideOne = () => (
    <SContainer>
        <STextWrapper>
            <h1>
                The Beginning After The End
            </h1>
            <p>

                King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability.
                However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a
                powerful king lurks the shell of man, devoid of purpose and will.
                Reincarnated into a new world filled with magic and monsters, the king has
                a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge,
                however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy
                everything he has worked for, questioning his role and reason for being born again.
            </p>
        </STextWrapper>
        <img src="https://i.pinimg.com/originals/60/84/d0/6084d01221bdfb4d38704f3ba6ea1743.png" />
    </SContainer>
);

export default SlideOne;