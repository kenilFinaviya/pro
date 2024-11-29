import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

var i = false;
const handel = () => {

    if (i == true) {
        document.getElementById('submenu1').style.display = 'none';
        i = false;
    }
    else if (i == false) {
        document.getElementById('submenu1').style.display = 'block';
        i = true;
    }

}

const Form = () => {

    const navigate = useNavigate()

    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [catagory, setCatagory] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();

    const submit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/createproduct", {
            product_image: image,
            product_name: name,
            product_description: description,
            product_catagory: catagory,
            product_price: price,
            product_stock: stock,
        })
            .then(function (response) {
                console.log(response)
                navigate("/dashboard")
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>

                </nav>
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="../../index3.html" className="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Admin</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Kenil Finaviya</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            {/* <i className="right fas fa-angle-left" /> */}
                                        </p>
                                    </Link>

                                </li>
                                <li class="nav-item">
                                    <Link to="/Dashboard/order" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Order</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/inquire" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Inquire</p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/quotation" class="nav-link">
                                        <i class="nav-icon fas fa-file"></i>
                                        <p>Quotation</p>
                                    </Link>
                                </li>
                                <li className="nav-item menu-open">
                                    <a className="nav-link active">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Product
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a className="nav-link active">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Product</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Dashboard/form/viewproduct" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>View Product</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Add Product</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Add Product</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-6">
                                    {/* general form elements */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Product</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputimages1">Image</label>
                                                    <input type="text" className="form-control" id="exampleInputimages1" placeholder="Enter url" autoComplete='off' value={image} onChange={(e) => setImage(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputname1">Name</label>
                                                    <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter product name" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Description">Description</label>
                                                    <input type="text" className="form-control" id="Description" placeholder="Enter description" autoComplete='off' value={description} onChange={(e) => setDescription(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="catagory">Catagory</label>
                                                    <select className="form-control" id="catagory" name="catagory" value={catagory} onChange={(e) => setCatagory(e.target.value)} >
                                                        <option value="default" selected disabled>select catagory</option>
                                                        <option value="hair oil">hair oil</option>
                                                        <option value="facewash">facewash</option>
                                                        <option value="shampoo">shampoo</option>
                                                        <option value="conditioner">conditioner</option>
                                                        <option value="bodywash">bodywash</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Price">Price</label>
                                                    <input type="number" className="form-control" id="Price" placeholder="Price" autoComplete='off' value={price} onChange={(e) => setPrice(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Price">Stock</label>
                                                    <input type="number" className="form-control" id="Price" placeholder="Stock" autoComplete='off' value={stock} onChange={(e) => setStock(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary" onClick={submit} >Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>
            {/* ./wrapper */}
        </div>
    )
}
export default Form