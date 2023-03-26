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

function createData(name: string, rank: number, explain: string) {
  return { name, rank, explain };
}

const rows = [
  createData("ピンゾロ", 1, "１が３つ"),
  createData("ゾロ目（６）", 2, "６が３つ"),
  createData("ゾロ目（５）", 3, "５が３つ"),
  createData("ゾロ目（４）", 4, "４が３つ"),
  createData("ゾロ目（３）", 5, "３が３つ"),
  createData("ゾロ目（２）", 6, "２が３つ"),
  createData("シゴロ", 7, "４、５、６が１つずつ"),
  createData("６の目", 8, "同じ目が２つ出ていてかつ６が１つ"),
  createData("５の目", 9, "同じ目が２つ出ていてかつ５が１つ"),
  createData("４の目", 10, "同じ目が２つ出ていてかつ４が１つ"),
  createData("３の目", 11, "同じ目が２つ出ていてかつ３が１つ"),
  createData("２の目", 12, "同じ目が２つ出ていてかつ２が１つ"),
  createData("１の目", 13, "同じ目が２つ出ていてかつ１が１つ"),
  createData("目無し", 14, "シゴロ、ヒフミ以外で同じ目が１つもない"),
  createData("ヒフミ", 15, "１、２、３が１つずつ"),
];

const styles = {
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflow: "scroll",
  },
};

export const RuleModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          sx={{ width: 160, height: 30, fontSize: "15px" }}
        >
          ルールを確認する
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
                ルール説明
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                チンチロはサイコロを３つ使って行うゲームです。
              </Typography>
              <Typography id="transition-modal-description">
                サイコロを３つ振って出た目に応じて役が決まるのでその強さで競います。
              </Typography>
              <Typography id="transition-modal-description">
                通常は振り直しは２回までで役を決定します。
              </Typography>
              <Typography id="transition-modal-description">
                役がない（目無しであった）場合のみ振り直し可能です。
              </Typography>
              <Typography id="transition-modal-description">
                ２回振りなおしても目無ししか出なかった場合はその人の役は目無しとなります。
              </Typography>
              <Typography id="transition-modal-description">
                本来は親や子を決めて行いますが、ここではカジュアルな場でのプレイを想定していますのでその説明は省きます。
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                以下に役一覧を載せます。上にあるものほど強い役です。
              </Typography>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>役の名前</TableCell>
                      <TableCell align="right">強さランク</TableCell>
                      <TableCell align="right">説明</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.rank}</TableCell>
                        <TableCell align="right">{row.explain}</TableCell>
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
                  mt: 2,
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
