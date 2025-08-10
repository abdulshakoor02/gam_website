import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

/**
 * Client-only wrapper that composes ResponsiveMasonry + Masonry.
 * Imported dynamically with ssr:false from the page so it won't run on the server.
 */
const MasonryWrapper = ({ children, columnsCount = 2, gutter = "50px", columnsCountBreakPoints = { 350: 1, 750: 1, 992: 2 } }) => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry columnsCount={columnsCount} gutter={gutter}>
                {children}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryWrapper;