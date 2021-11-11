const stateDefault = {
    danhSachGheDangDat: [

    ]
}
export const DatVeXemPhim = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex((ghe) => {
                return ghe.soGhe === action.ghe.soGhe;
            })
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = [...danhSachGheDangDatUpdate];
            return { ...state }
        }
        case "HUY_GHE": {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex((ghe) => {
                return ghe.soGhe === action.soGhe;
            })
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = [...danhSachGheDangDatUpdate];

            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}