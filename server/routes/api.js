/* 
  API 
*/

const express = require('express');
const mongoose = require('mongoose');
const Articulos = require('../models/Articulos');

/*
	Using router:

	-- File:  /routes/api.js --
	router.get('/', (req, res, next) => {
		res.render('index', {
			title:"API"
		});
	});

	-- File:  app.js --
	var api = require('./routes/api');
	app.use('/', api);

*/
/*
	Using "exports".
*/

// --- GET --- 
exports.getIndex = (req, res, next) => {
		res.render('index', {
				title:"Index"
		});
};

exports.getArticulos = (req, res, next) => {
		Articulos.find()
				.limit()
				.sort()
				.exec((err, data) => {
						res.render('users', {
								title : "Articulos",
								data : data
						});
				});	
};

exports.getCreateUser = (req, res ,next) => {
		res.render('create', {
				title:"Crear personaje"
		});
};

exports.getUserDetails = (req, res, next) => {
		Articulos.findById(req.params.id)
				.limit()
				.sort()
				.exec((err, data) => {
						res.render('user-details', {
								title : "Detalles",
								data : data
						});
				});
};

exports.getEditUser = (req, res, next) => {
		Articulos.findById(req.params.id)
				.exec((err, data) => {
					res.render('edit', {
							title : "Editar Articulo",
							data : data
					});
				});
};

exports.getJson = (req, res, next) => {
		Articulos.find()
				.exec((err, data) => {
						res.json(data);
				});
};
//--- POST ---
exports.postCreateArticulos = (req, res, next) => {
		var articulo = new Articulos({
				descripcion: req.body.descripcion,
				precio: req.body.precio,
				stock: req.body.stock
		});

		articulo.save();
		res.redirect("/users");
};

// --- PUT ---
exports.putEditArticulos = (req, res, next) => {
		Articulos.findById(req.params.id)
				.limit()
				.sort()
				.exec((err, data) => {
						data.descripcion = req.body.descripcion;
						data.precio = req.body.precio;
						data.stock = req.body.stock;

						data.save();
						res.redirect('/user/' + req.params.id);
				});
};

// --- DELETE ---
exports.deleteArticulo = (req, res, next) => {
		Articulos.findByIdAndRemove(req.params.id)
				.exec((err, data) => {
						res.redirect('/users');
				});
};
