<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Blogs</h5>
                        <button class="btn btn-secondary btn-sm" id="load-blogs">load blogs</button>
                    </div>
                    <div class="card-body">
                        <form action="" class="mb-3">
                            <div class="form-group mb-3">
                                <input type="text" name="title" placeholder="title" id="title" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <textarea name="body" id="body" cols="30" rows="3 placeholder="body"" class="form-control"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-sm">save blogs</button>
                        </form>
                        
                        <ul class="list-group" id="blogs-list"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./index.js"></script>
</body>
</html>