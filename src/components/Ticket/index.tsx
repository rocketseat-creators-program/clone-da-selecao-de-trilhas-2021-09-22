import React, { useCallback, useState } from "react";

import { MdChevronRight } from "react-icons/md";
import Button from "../Button";
import { SelectedTrailModal } from "../SelectedTrailModal";
import { VideoTrailModal } from "../VideoTrailModal";

import {
  Container,
  ContentWrapper,
  Footer,
  Content,
  VideoContainer,
  ContainerImage,
  InvisibleDiv,
} from "./styles";

interface TicketProps {
  trail: string;
  textColor: string;
  colorBorder: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  schedule: string;
  color: string;
  description: string;
  tools: string;
  thumbnail_url: string;
}

export function Ticket({
  trail,
  textColor,
  colorBorder,
  icon: Icon,
  title,
  schedule,
  color,
  description,
  tools,
  thumbnail_url,
}: TicketProps) {
  const [isVideoTrailModalVisible, setIsVideoTrailModalVisible] =
    useState(false);

  const [isSelectedTrailModalVisible, setIsSelectedTrailModalVisible] =
    useState(false);

  const handleVideoTrailModal = useCallback(() => {
    setIsVideoTrailModalVisible(true);
  }, []);

  const handleCloseVideoTrailModal = useCallback(() => {
    setIsVideoTrailModalVisible(false);
  }, []);

  const handleSelectedTrailModal = useCallback(() => {
    setIsSelectedTrailModalVisible(true);
  }, []);

  const handleCloseSelectedTrailModal = useCallback(() => {
    setIsSelectedTrailModalVisible(false);
  }, []);

  return (
    <>
      <Container color={textColor} colorBorder={colorBorder}>
        <ContainerImage>
          <Icon />
        </ContainerImage>
        <InvisibleDiv />
        <ContentWrapper>
          <Content textColor={textColor} color={textColor}>
            <div>
              <span>Trilha</span>
              <span>{title}</span>
            </div>

            <div>
              <a
                href={schedule}
                target="_blank"
                rel="noopener noreferrer"
                color={color}
              >
                cronograma
              </a>
              <MdChevronRight size={20} color={textColor} />
            </div>
          </Content>
          <p>{description}</p>

          <Footer>
            <strong>Ferramentas:</strong>
            <span>{tools}</span>
          </Footer>
        </ContentWrapper>

        <VideoContainer>
          <div onClick={handleVideoTrailModal}>
            <img src={thumbnail_url} alt="Video Thumbnail" />
          </div>

          <Button onClick={handleSelectedTrailModal} color={color}>
            Escolher essa trilha
          </Button>
        </VideoContainer>
      </Container>

      <VideoTrailModal
        onOpenModal={isVideoTrailModalVisible}
        onCloseModal={handleCloseVideoTrailModal}
      />

      <SelectedTrailModal
        trail={trail}
        onOpenModal={isSelectedTrailModalVisible}
        onCloseModal={handleCloseSelectedTrailModal}
      />
    </>
  );
}
