import React, { Component } from 'react'
import './BaiTapDatVeXemPhim.css'
import ThongTinHangGhe from './ThongTinHangGhe.js'
import HangGhe from './HangGhe.js'
import danhSachGheData from '../Data/danhSachGhe.json'
export default class BaiTapDatVeXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((ghe, index) => {
            return <div key="index">
                <HangGhe ghe={ghe} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: "100%" }}>
                <div style={{ backgroundColor: "rgba(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="text-white display-4">Bài tập đặt vé CyberLearn</div>
                                <div className="mt-3" style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                                    <div className="screen mt-1" style={{ width: "100%" }}></div>

                                </div>
                                {this.renderHangGhe()}
                            </div>

                            <div className="col-4">
                                <div style={{ fontSize: "35px" }} className="text-light mt-2">Danh sách ghế bạn chọn</div>
                                <ThongTinHangGhe />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
