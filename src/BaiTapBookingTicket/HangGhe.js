import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.ghe.danhSachGhe.map((item, index) => {
            let cssGheDat = '';
            let disabled = false;
            if (item.daDat) {
                cssGheDat = 'gheDuocChon';
                disabled = true;
            }
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex((gheDangChon) => {
                return gheDangChon.soGhe === item.soGhe;
            })
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }
            return <button onClick={() => {
                this.props.datGhe(item)
            }} disabled={disabled} className={`ghe ${cssGheDat} ${cssGheDangDat}`} key={index}>
                {item.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.ghe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-3">
                {this.props.ghe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.ghe.hang} {this.renderGhe()}
            </div>
        }
    }
    render() {
        return (
            <div className="text-light text-left ml-5" style={{ fontSize: "22px" }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatVeXemPhim.danhSachGheDangDat
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                ghe
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
