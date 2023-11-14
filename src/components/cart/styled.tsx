import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: end;
  width: 260px;
  height: 220.05px;
  margin-top: 10px;
  margin-left: 10px;
  position: relative;

  .close {
    position: absolute;
    padding: 4px;
    background-color: transparent;
    right: 10px;
    top: 0;

    svg {
      color: black;
      height: 41px;
      width: 41px;
    }
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 220.05px;
    border-radius: 8px;
    margin-top: 50px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
      margin: 0 20px;

      .mobileDirection {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .count {
          display: flex;
          flex-direction: column;

          .qtd {
            display: none;
          }

          .buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0.3px solid #bfbfbf;
            border-radius: 4px;

            p {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              line-height: 24px;
            }

            .quantity {
              min-width: 7px;
            }

            hr {
              height: 20px;
            }
            .left {
              margin-right: 8px;
            }
            .right {
              margin-left: 8px;
            }

            button {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: transparent;
              border: none;
              height: 34.5px;
              width: 34.5px;
              cursor: pointer;

              p {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 29px;
              }
            }

            button:disabled {
              cursor: not-allowed;
            }
          }
        }
      }

      img {
        width: 80px;
        height: 95px;
      }

      .title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2c2c2c;
      }

      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #373737;
        border-radius: 5px;
        height: 34.81px;
        width: 84px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
      }
    }
  }

  @media (min-width: 960px) {
    display: flex;
    align-items: end;
    width: 395px;
    height: 102px;
    margin-top: 10px;
    margin-left: 10px;
    position: relative;

    .close {
      position: absolute;
      padding: 4px;
      background-color: black;
      right: 10px;
      top: 0;

      svg {
        color: white;
        height: 17px;
        width: 17px;
      }
    }

    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 379px;
      height: 95px;
      border-radius: 8px;
      margin-top: 50px;

      .info {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .mobileDirection {
          width: 50%;
          .count {
            display: flex;
            flex-direction: column;
            margin-bottom: 8px;

            .qtd {
              display: flex;
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 400;
              font-size: 5px;
              line-height: 6px;
              margin-bottom: 4px;
            }

            .buttons {
              display: flex;
              justify-content: center;
              align-items: center;
              border: 0.3px solid #bfbfbf;
              border-radius: 4px;

              p {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 8px;
                line-height: 10px;
              }

              button {
                background-color: transparent;
                border: none;
                height: 19px;
                width: 22px;
                cursor: pointer;

                p {
                  font-family: "Montserrat";
                  font-style: normal;
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 15px;
                }
              }
            }
          }
        }

        img {
          width: 46px;
          height: 57px;
        }

        .title {
          width: 113px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 17px;
        }

        .price {
          padding: 0;
          background-color: transparent;
          color: black;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }
`;
