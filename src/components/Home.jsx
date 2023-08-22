import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import Menu from './Menu';
import CartContainer from "./CartContainer";
import Intro from "./Intro";
import Footer from "./Footer";
import Modal from "./Modal";
import Pesanan from "./Pesanan";

const Home = ({ idPelanggan, setIdPelanggan }) => {
	const [{ cartShow, modalShow }, dispatch] = useStateValue();

	useEffect(() => { }, [cartShow, modalShow]);
	return (
		<div>
			<Intro />
			<Pesanan
				idPelanggan={idPelanggan}
				setIdPelanggan={setIdPelanggan}
			/>
			<Menu />
			{cartShow && <CartContainer
				idPelanggan={idPelanggan}
				setIdPelanggan={setIdPelanggan}
			/>}
			{modalShow && <Modal />}
			<Footer />
		</div>
	)
}

export default Home