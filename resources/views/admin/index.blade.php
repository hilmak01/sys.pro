@extends('layouts.main')
@section('layout')
<main class="main">
    <div class="navbar">
        <admin-nav></admin-nav>
    </div>
    <div class="sidebar">
        <side-nav></side-nav>
    </div>
    <div class="content">
        <admin-security></admin-security>
    </div>
    <div class="settings"></div>
    <div class="footer"></div>
</main>
@endsection
