export default function BannerPrimary(){
    return(
        <section>
          <picture>
            <source srcSet="banner-lg.jpg" media="(min-width: 768px)" />
            <source srcSet="banner-md.jpg" media="(min-width: 500px" />
            <img src="banner.jpg" alt="" className="w-full" />
          </picture>
        </section>
    )
}