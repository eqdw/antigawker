Antigawker
=============

Chrome extension that replaces all links to any Gakwer Media sites with
links to the google cache. Because those fuckers don't deserve our
clicks. Valleywag's bullshit faux-class-warfare clickbait does nothing
but enrage everyone, all for Gawker's profit margin. They paint a false
picture of software engineers like me, to outrage their readers.
Meanwhile, they fill me with existential depression, pointing to startup
millionaires and shaming me for not keeping up with these unrealistic
Joneses. They are shame based tabloid journalists for tech.

[Direct download of crx
file](https://github.com/eqdw/antigawker/blob/master/antigawker.crx?raw=true)

Code liberally borrowed/inspired by [Cloud to
Butt](https://github.com/panicsteve/cloud-to-butt) because I don't know
how to crx and gsubing text is the same as gsubing links, no?

Installation
------------

In Chrome, choose Window > Extensions.  Drag antigawker.crx into the page that appears.

Note that you can't find this in the Chrome store at the moment because
I haven't gotten around to registering as a Chrome dev or whatever I
have to do.



Contribution
------------
Please run `rake` in the project directory to regenerate the .crx file
before committing changes. Note that you need to have the crxmake gem
installed for the rake task to work. Also note that my unix-fu is too
weak to do installation detection in the rakefile. Also also note that
crxmake generates a .pem file. I assume this is meaningful if I was
actually listed in the chrome extension directory. Since I'm not, please
delete those generated .pems. :D

And thanks for contributing!
