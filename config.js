import { makedirs, path } from 'os';
var batch_size, embedding_dim, epochs, learning_rate, path_data, path_glove, path_logs, path_outputs, path_src, random_seed;
path_src = path.dirname(path.abspath(__file__));
path_data = path.join(path_src, "data/article-data");
path_logs = path.join(path_src, "logs");
path_outputs = path.join(path_src, "outputs");
path_glove = path.join(path_src, "data/glove-values");

for (var p, _pj_c = 0, _pj_a = [path_data, path_logs, path_outputs], _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  p = _pj_a[_pj_c];

  if (!path.exists(p)) {
    makedirs(p);
  }
}

random_seed = 42;
batch_size = 32;
embedding_dim = 512;
epochs = 1000;
learning_rate = 0.01;
