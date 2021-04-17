import React from 'react'
import {Footer} from '../components'
import config from '../fixtures/config'
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>
                Question? Contact us.
            </Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="javascript:void(0)">FAQ</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Investor Relations</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Privacy</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Speed Test</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="javascript:void(0)">Help Center</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Jobs</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Cookie Preferences</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Legal Notices</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="javascript:void(0)">Account</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Ways to Watch</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Corporate information</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="javascript:void(0)">Media Center</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Term of Use</Footer.Link>
                    <Footer.Link href="javascript:void(0)">Contact Us</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Lang>
                {config.lang}
            </Footer.Lang>
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}
