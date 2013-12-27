task :default => :all
desc "Make .crx"
task :crx do
  system("crxmake --pack-extension=Source --extension-output=antigawker.crx")
end

task :all => [:crx]
