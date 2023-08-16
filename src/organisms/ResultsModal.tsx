import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { resultModalName } from "../hooks/resultModalName";

import one from "../img/one.png";
import two from "../img/two.png";
import three from "../img/three.png";
import four from "../img/four.png";
import five from "../img/five.png";
import six from "../img/six.png";

function createData(number: number, sai: number[], name: string) {
  return { number, sai, name };
}

const styles = {
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    pb: 0,
    maxHeight: "80vh",
    overflow: "scroll",
  },
};

export const ResultsModal = ({ results }: { results: number[][] }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saiImg = [one, two, three, four, five, six];

  const rows = results
    .filter((_, i) => {
      return i !== 0;
    })
    .map((result, i) => {
      return createData(i + 1, result, resultModalName(result));
    });

  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          sx={{
            width: { xs: "100px", sm: "120px" },
            height: { xs: 25, sm: 30 },
            fontSize: { xs: "10px", sm: "12px" },
          }}
        >
          今までの結果
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={styles.modal}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                今までの結果確認
              </Typography>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>回数</TableCell>
                      <TableCell align="center">出目</TableCell>
                      <TableCell align="right">役</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.number}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.number}回目
                        </TableCell>
                        <TableCell align="center">
                          <img
                            style={{ width: "30px", border: "solid" }}
                            src={saiImg[row.sai[0]]}
                            alt="サイコロ"
                          />
                          <img
                            style={{ width: "30px", border: "solid" }}
                            src={saiImg[row.sai[1]]}
                            alt="サイコロ"
                          />
                          <img
                            style={{ width: "30px", border: "solid" }}
                            src={saiImg[row.sai[2]]}
                            alt="サイコロ"
                          />
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  p: 2,
                  position: "sticky",
                  bottom: 0,
                  background: "white",
                }}
              >
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  sx={{
                    width: 100,
                    height: 30,
                    fontSize: "15px",
                    p: 2,
                  }}
                >
                  閉じる
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </div>
  );
};
