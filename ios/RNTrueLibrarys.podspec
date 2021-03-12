
Pod::Spec.new do |s|
  s.name         = "RNTrueLibrarys"
  s.version      = "1.0.0"
  s.summary      = "RNTrueLibrarys"
  s.description  = "Create for true"
  s.homepage     = "https://github.com/manopsee/true-librarys#readme"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/manopsee/true-librarys.git", :tag => "master" }
  s.source_files  = "RNTrueLibrarys/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  