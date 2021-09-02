require "bundler/gem_tasks"
require "rake/testtask"

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.test_files = FileList["test/**/*_test.rb"]
  t.warning = true
end

Rake::TestTask.new(:bench) do |t|
  t.libs << "test"
  t.test_files = FileList["test/**/*_benchmark.rb"]
  t.warning = true
end

task :default => :test

namespace :docker do
  task :build do
    sh 'docker', 'build', '-t', 'sider/goodcheck:dev', '.'
  end
end
