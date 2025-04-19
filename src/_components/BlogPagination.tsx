'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export default function BlogPagination() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const updateCollection = useCallback((collection: Element) => {
        const canPaginate = !!collection.querySelector('[data-bss-type="blog-loop-pagination"]');
        if (!canPaginate) return;

        const pageParam = collection.getAttribute('data-bss-page-param');
        const page = pageParam ?
            Number(searchParams.get(pageParam)) || 1 :
            1;

        renderCollectionPage(collection, page);
    }, [searchParams]);

    const renderCollectionPage = (collection: Element, page = 1) => {
        const pagination = collection.querySelector('[data-bss-type="blog-loop-pagination"]');
        if (!pagination) return;

        const perPage = Number(collection.getAttribute('data-bss-perpage')) || 12;
        const listItems = Array.from(collection.querySelectorAll('[data-bss-type="blog-loop-item"]'));

        // Hide all items
        listItems.forEach(item => {
            (item as HTMLElement).style.setProperty('display', 'none', 'important');
        });

        // Show only the relevant items
        const visibleItems = listItems.slice((page - 1) * perPage, page * perPage);
        visibleItems.forEach(item => {
            (item as HTMLElement).style.removeProperty('display');
        });

        // Update pagination controls
        const paginationItems = Array.from(pagination.querySelectorAll('.page-item'));
        const itemCount = listItems.length;
        const pageCount = Math.ceil(itemCount / perPage);

        const previousBtnDisabled = page - 1 <= 0;
        const previousPage = previousBtnDisabled ? 1 : page - 1;

        const nextBtnDisabled = page + 1 > pageCount;
        const nextPage = nextBtnDisabled ? pageCount : page + 1;

        paginationItems.forEach(paginationItem => {
            paginationItem.classList.remove('active', 'disabled');

            const itemType = paginationItem.getAttribute('data-type');
            if (itemType === 'prev') {
                paginationItem.setAttribute('data-page', previousPage.toString());
                if (previousBtnDisabled) {
                    paginationItem.classList.add('disabled');
                }
            }
            else if (itemType === 'next') {
                paginationItem.setAttribute('data-page', nextPage.toString());
                if (nextBtnDisabled) {
                    paginationItem.classList.add('disabled');
                }
            }
            else if (Number(paginationItem.getAttribute('data-page')) === page) {
                paginationItem.classList.add('active');
            }
        });
    };

    useEffect(() => {
        const collections = document.querySelectorAll('[data-bss-type="blog-loop"]');

        collections.forEach(collection => {
            updateCollection(collection);

            const pagination = collection.querySelector('[data-bss-type="blog-loop-pagination"]');
            if (!pagination) return;

            pagination.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                const paginationItem = target.closest('.page-item');
                if (!paginationItem) return;

                e.preventDefault();

                if (paginationItem.classList.contains('disabled') ||
                    paginationItem.classList.contains('active')) return;

                const collection = paginationItem.closest('[data-bss-type="blog-loop"]');
                if (!collection) return;

                const page = parseInt(paginationItem.getAttribute('data-page') || '0');
                if (!page) return;

                const pageParam = collection.getAttribute('data-bss-page-param');

                if (pageParam) {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.set(pageParam, page.toString());
                    router.push(`${pathname}?${newParams.toString()}`);

                    document.querySelectorAll('[data-bss-type="blog-loop"]').forEach(c => {
                        const param = c.getAttribute('data-bss-page-param');
                        if (param === pageParam) {
                            renderCollectionPage(c, page);
                        }
                    });
                } else {
                    renderCollectionPage(collection, page);
                }
            });
        });

        return () => {
            // Cleanup event listeners if needed
        };
    }, [pathname, router, searchParams, updateCollection]);

    return null;
}
