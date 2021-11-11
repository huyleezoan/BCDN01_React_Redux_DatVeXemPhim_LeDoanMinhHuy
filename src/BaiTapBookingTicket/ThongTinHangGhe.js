import React, { Component } from 'react'
import { connect } from 'react-redux';
class ThongTinHangGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
                    <button className="gheDuocChon">
                    </button>
                    <span className="text-light" style={{ fontSize: "30px" }}>ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon">
                    </button>
                    <span className="text-light" style={{ fontSize: "30px" }}>ghế đang đặt</span>
                    <br />
                    <button className="ghe " style={{ marginLeft: 0 }}>
                    </button>
                    <span className="text-light" style={{ fontSize: "30px" }}>ghế chưa đặt</span>
                </div>
                <div className="mt-5">
                    <table className="table w-100" border="2">
                        <thead>
                            <tr className="text-light" style={{ fontSize: "15px" }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((ghe, index) => {
                                return <tr key={index}>
                                    <td>
                                        {ghe.soGhe}
                                    </td>
                                    <td>{ghe.gia}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            this.props.dispatch({
                                                type: "HUY_GHE",
                                                soGhe: ghe.soGhe
                                            })
                                        }}>Hủy</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className="text-success">
                            <tr>
                                <td>
                                </td>
                                <td>Tổng tiền:</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia
                                }, 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatVeXemPhim.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinHangGhe)